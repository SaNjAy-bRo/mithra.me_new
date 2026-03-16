import zipfile
import xml.etree.ElementTree as ET
import os
import glob

def extract_text_from_xlsx(filepath):
    text_content = []
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            # First get shared strings
            shared_strings = []
            if 'xl/sharedStrings.xml' in z.namelist():
                try:
                    data = z.read('xl/sharedStrings.xml')
                    tree = ET.fromstring(data)
                    for t in tree.iter():
                        if t.tag.endswith('}t') and t.text:
                            shared_strings.append(t.text)
                except Exception:
                    pass
            text_content.append("--- SHARED STRINGS (All Text Content) ---")
            text_content.extend(shared_strings)
            
            # For some cells, text is inline
            for name in z.namelist():
                if name.startswith('xl/worksheets/sheet') and name.endswith('.xml'):
                    try:
                        data = z.read(name)
                        tree = ET.fromstring(data)
                        inline = []
                        for t in tree.iter():
                            if t.tag.endswith('}t') and t.text:
                                inline.append(t.text)
                            elif t.tag.endswith('}v') and t.text:
                                # Values could be numbers or indices, we just add them if they seem like real data
                                if not t.text.isdigit():
                                    inline.append(t.text)
                        if inline:
                            text_content.append(f"--- {name} Inline Text ---")
                            text_content.extend(inline)
                    except Exception:
                        pass
    except Exception as e:
        return f"Error reading {filepath}: {e}"
    return '\n'.join(text_content)

def extract_text_from_pptx(filepath):
    text_content = []
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            for name in z.namelist():
                if name.startswith('ppt/slides/slide') and name.endswith('.xml'):
                    try:
                        data = z.read(name)
                        tree = ET.fromstring(data)
                        texts = []
                        for t in tree.iter():
                            if t.tag.endswith('}text') or t.tag.endswith('}t'):
                                if t.text and t.text.strip():
                                    texts.append(t.text.strip())
                        if texts:
                            text_content.append(f"--- {name} ---")
                            text_content.extend(texts)
                    except Exception:
                        pass
    except Exception as e:
        return f"Error reading {filepath}: {e}"
    return '\n'.join(text_content)

directory = r"d:\Mithrah\contents"
files = glob.glob(os.path.join(directory, '*'))

with open(r"d:\Mithrah\extracted_contents.txt", "w", encoding="utf-8") as out:
    for f in files:
        out.write(f"\n{'='*80}\nFILE: {os.path.basename(f)}\n{'='*80}\n")
        if f.endswith('.xlsx'):
            out.write(extract_text_from_xlsx(f))
        elif f.endswith('.pptx'):
            out.write(extract_text_from_pptx(f))
        out.write("\n")

print("Extraction complete.")

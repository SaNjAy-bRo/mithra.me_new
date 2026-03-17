import os
import re

def check_images():
    data_path = r'd:\Mithrah\src\lib\data.ts'
    public_path = r'd:\Mithrah\public'
    
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all strings that look like paths or URLs in src, image, bgImage
    # pattern: src: "...", image: "...", bgImage: "..."
    matches = re.finditer(r'(src|image|bgImage):\s*["\']([^"\']+)["\']', content)
    
    missing_local = []
    invalid_remote = []
    checked_count = 0

    for match in matches:
        key = match.group(1)
        path = match.group(2)
        checked_count += 1
        
        if path.startswith('http'):
            # Basic URL check
            if not path.startswith('https://images.unsplash.com') and not path.startswith('https://wa.me'):
                # We could do more but mostly it's unsplash
                pass
        elif path.startswith('/'):
            # Local path
            full_path = os.path.join(public_path, path.lstrip('/'))
            if not os.path.exists(full_path):
                missing_local.append(path)
        else:
            # Relative path? (not expected in public/ setup but let's check)
            pass

    print(f"Checked {checked_count} image references.")
    if missing_local:
        print("\nMissing local images:")
        for m in set(missing_local):
            print(f"- {m}")
    else:
        print("\nAll local images found.")

    if invalid_remote:
        print("\nInvalid remote URLs:")
        for r in set(invalid_remote):
            print(f"- {r}")

if __name__ == "__main__":
    check_images()

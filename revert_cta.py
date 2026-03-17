import re

def revert_cta_icons(content):
    # Mapping of common CTA button purposes to relevant icons
    cta_icon_map = {
        "Get Transit Media Rates": "ph-car-profile",
        "Request Telecom Quote": "ph-broadcast",
        "Book Premium Spaces": "ph-buildings",
        "Get Digital Media Plan": "ph-chart-line-up",
        "Get Cinema Rates": "ph-film-strip",
        "Enquire Now": "ph-megaphone",
    }
    
    fallback_icon = "ph-megaphone"

    def cta_replacer(match):
        cta_block = match.group(0)
        # Find buttonText to determine the icon
        btn_match = re.search(r'buttonText:\s*(["\'][^"\']+["\'])', cta_block)
        icon_name = fallback_icon
        if btn_match:
            btn_text = btn_match.group(1).strip('"\'')
            icon_name = cta_icon_map.get(btn_text, fallback_icon)
        
        # Replace image: "..." with icon: "..."
        new_block = re.sub(r'image:\s*["\'][^"\']+["\']', f'icon: "{icon_name}"', cta_block)
        return new_block

    # Find the cta: { ... } blocks
    new_content = re.sub(r'cta:\s*\{[^\}]+\}', cta_replacer, content)
    return new_content

with open(r'd:\Mithrah\src\lib\data.ts', 'r', encoding='utf-8') as f:
    data = f.read()

new_data = revert_cta_icons(data)

with open(r'd:\Mithrah\src\lib\data.ts', 'w', encoding='utf-8') as f:
    f.write(new_data)

print("Reverted CTA icons in data.ts successfully")

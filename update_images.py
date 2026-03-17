import re

def update_data(content):
    # Mapping of common icons to relevant unsplash categories
    image_map = {
        "ph-whatsapp-logo": "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=400&fit=crop",
        "ph-chat-circle-dots": "https://images.unsplash.com/photo-1577563906417-45a11b3f9f7c?w=400&h=400&fit=crop",
        "ph-broadcast": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=400&fit=crop",
        "ph-chart-line-up": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
        "ph-device-mobile": "https://images.unsplash.com/photo-1556656793-062ff98782ee?w=400&h=400&fit=crop",
        "ph-envelope": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=400&fit=crop",
        "ph-phone-call": "https://images.unsplash.com/photo-1520923642038-b4259ace9439?w=400&h=400&fit=crop",
        "ph-buildings": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
        "ph-house": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
        "ph-magnifying-glass": "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=400&h=400&fit=crop",
        "ph-megaphone": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
        "ph-users": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop",
        "ph-monitor": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        "ph-video": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop",
        "ph-film-strip": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=400&fit=crop",
        "ph-globe": "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400&h=400&fit=crop",
        "ph-palette": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
        "ph-presentation-chart": "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
    }
    
    # Generic billboard for unknown
    fallback = "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop"

    def replacer(match):
        icon_name = match.group(1).strip('"\'')
        img_url = image_map.get(icon_name, fallback)
        return f'image: "{img_url}"'

    new_content = re.sub(r'icon:\s*(["\'][^"\']+["\'])', replacer, content)
    return new_content

with open(r'd:\Mithrah\src\lib\data.ts', 'r', encoding='utf-8') as f:
    data = f.read()

new_data = update_data(data)

with open(r'd:\Mithrah\src\lib\data.ts', 'w', encoding='utf-8') as f:
    f.write(new_data)

print("Updated data.ts successfully")

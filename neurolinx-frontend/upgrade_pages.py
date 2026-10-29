import os
import glob
import re

pages_dir = r'd:\Neurolinx-WEBSITE .S\Neurolinx-WEBSITE\neurolinx-frontend\src\pages'
files = glob.glob(os.path.join(pages_dir, '*.tsx'))

default_img = 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'

for file in files:
    if 'HomeAutomation.tsx' in file: continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update products array to include img
    def repl_product(m):
        if 'img:' not in m.group(0):
            return m.group(1) + f', img: "{default_img}" ' + m.group(2)
        return m.group(0)
    
    content = re.sub(r'(\{\s*title:\s*\"[^\"]+\",\s*desc:\s*\"[^\"]+\")\s*(\})', repl_product, content)
    
    # 2. Rewrite the Feature Section
    feature_match = re.search(r'\{\/\* Feature Section \*\/.*?\<div className=\"py-32 px-8 max-w-7xl mx-auto w-full\"\>(.*?)\<\/div\>\n    \<\/div\>', content, re.DOTALL)
    
    if feature_match:
        old_feature = feature_match.group(1)
        
        # Extract heading
        heading_match = re.search(r'\<h2.*?\>(.*?)\<\/h2\>', old_feature, re.DOTALL)
        heading_text = 'Features.'
        if heading_match:
            heading_text = heading_match.group(1).replace('<br/>', '').replace('<br />', '').strip()
            heading_text = re.sub(r'\s+', ' ', heading_text)
            
        # Extract paragraph
        p_match = re.search(r'\<p className=\"text-gray-500 text-lg leading-relaxed mb-10\"\>(.*?)\<\/p\>', old_feature, re.DOTALL)
        p_text = 'Explore our comprehensive solutions.'
        if p_match:
            p_text = p_match.group(1).strip()
            
        new_feature = f'''
         <div className=\"flex flex-col items-center text-center\">
             <h2 className=\"text-4xl md:text-5xl font-black text-brand-charcoal mb-6 leading-tight\">
               {heading_text}
             </h2>
             <p className=\"text-gray-500 text-lg leading-relaxed mb-16 max-w-2xl\">
               {p_text}
             </p>
             
             <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full text-left\">
               {{products.map((product, i) => (
                 <div key={{i}} className=\"flex flex-col bg-white overflow-hidden rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group cursor-pointer\">
                   <div className=\"h-48 w-full overflow-hidden\">
                     <img src={{product.img}} alt={{product.title}} className=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\" />
                   </div>
                   <div className=\"p-6 flex flex-col flex-1 bg-gray-50/50\">
                     <h3 className=\"text-xl font-bold text-brand-charcoal mb-2\">{{product.title}}</h3>
                     <p className=\"text-sm text-gray-500\">{{product.desc}}</p>
                   </div>
                 </div>
               ))}}
             </div>

             <button className=\"px-10 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all hover:-translate-y-1\">
               Learn More
             </button>
         </div>
'''
        content = content[:feature_match.start(1)] + new_feature + content[feature_match.end(1):]
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated', os.path.basename(file))

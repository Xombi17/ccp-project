"""
Utility functions for generating HTML content
"""
import os
import shutil

def ensure_directories():
    """Ensure all required directories exist"""
    directories = ['static/css', 'static/js', 'templates', 'data']
    for directory in directories:
        os.makedirs(directory, exist_ok=True)

def copy_static_files(output_dir):
    """Copy static files to the output directory"""
    static_dirs = ['css', 'js']
    for dir_name in static_dirs:
        src_dir = os.path.join('static', dir_name)
        dest_dir = os.path.join(output_dir, 'static', dir_name)
        os.makedirs(dest_dir, exist_ok=True)
        for file_name in os.listdir(src_dir):
            src_file = os.path.join(src_dir, file_name)
            dest_file = os.path.join(dest_dir, file_name)
            shutil.copy2(src_file, dest_file)

def generate_output_html(output_dir='output'):
    """Generate the final HTML output"""
    ensure_directories()
    os.makedirs(output_dir, exist_ok=True)
    
    # Copy template to output
    with open('templates/base.html', 'r', encoding='utf-8') as src:
        with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as dest:
            dest.write(src.read())
    
    # Copy static files
    copy_static_files(output_dir)
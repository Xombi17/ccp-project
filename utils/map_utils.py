"""
Utility functions for map creation and styling
"""

def create_popup_html(state_name, data):
    """Create HTML content for state popup"""
    return f"""
        <div style="width: 300px;">
            <h4 style="color: #2c3e50;"><b>{state_name}</b></h4>
            <hr>
            <p><b>Culture:</b> {data['culture']}</p>
            <p><b>History:</b> {data['history']}</p>
        </div>
    """

def get_state_style():
    """Return the default style for state polygons"""
    return {
        'fillColor': '#ff7800',
        'color': '#000000',
        'weight': 2,
        'fillOpacity': 0.35
    }

def get_highlight_style():
    """Return the highlight style for state polygons"""
    return {
        'fillColor': '#ff0000',
        'color': '#000000',
        'weight': 3,
        'fillOpacity': 0.5
    }
import folium

m = folium.Map(location = [39.69233226005567, 3.02696102105038], zoom_start = 10)

lugares = [

    # "MONUMENTOS"
    {
        'nombre': 'Cuevas del drach',
        'lat': 39.536359611911685,
        'lon': 3.3302804239719497,
        'icon': 'landmark',
        'color': 'red',
        'imagen': '/proyectos/mallorca/recursos/coves.jpg',
        'web': 'http://www.cuevasdeldrach.com/'
    },

    {   
        'nombre': 'Catedral',
        'lat': 39.56756130981906,
        'lon': 2.6483058395003938,
        'icon': 'landmark',
        'color': 'red',
        'imagen': '/proyectos/mallorca/recursos/catedral.jpeg',
        'web': 'https://www.catedraldemallorca.org/es/'
    },

    {   
        'nombre': 'Castillo de Bellver',
        'lat': 39.56399404986428,
        'lon': 2.6193883855329814,
        'icon': 'landmark',
        'color': 'red',
        'imagen': '/proyectos/mallorca/recursos/castillo.jpeg',
        'web': 'https://castelldebellver.palma.cat/'
    },

    # PLAYAS

    {   
        'nombre': 'Playa des Trenc',
        'lat': 39.34250783215909,
        'lon': 2.986478752984238,
        'icon': 'umbrella-beach',
        'color': 'lightblue',
        'imagen': '/proyectos/mallorca/recursos/estrenc.jpg',
        'web': 'https://www.viveremaiorca.com/es/que-ver/playas/es-trenc-2/'
    },

    {   
        'nombre': 'Cala Mondragó',
        'lat': 39.35280449037343, 
        'lon': 3.1883580546376966,
        'icon': 'umbrella-beach',
        'color': 'lightblue',
        'imagen': '/proyectos/mallorca/recursos/calamondrago.jpeg',
        'web': 'https://www.viveremaiorca.com/es/que-ver/playas/cala-mondrago-2/'
    },

    # RESTAURANTES

    {   
        'nombre': 'Ca\'n Torrat',
        'lat': 39.52630520995824,  
        'lon': 2.750191336473778,
        'icon': 'utensils',
        'color': 'lightred',
        'imagen': '/proyectos/mallorca/recursos/cantorrat.jpeg',
        'web': 'https://www.cantorrat.com/'
    },

    {   
        'nombre': 'Restaurante El Bungalow',
        'lat': 39.55041558753974,   
        'lon': 2.691267870188287,
        'icon': 'utensils',
        'color': 'lightred',
        'imagen': '/proyectos/mallorca/recursos/bungalow.jpg',
        'web': 'https://www.haztucartadigital.com/restaurante-el-bungalow-ciudad-jardin'
    },

    # PUEBLOS

    {   
        'nombre': 'Valldemossa',
        'lat': 39.709982922202975,    
        'lon': 2.6215317340468167,
        'icon': 'camera',
        'color': 'beige',
        'imagen': '/proyectos/mallorca/recursos/valldemossa.jpeg',
        'web': 'https://ajvalldemossa.net/es'
    },

    {   
        'nombre': 'Fornalutx',
        'lat': 39.78210921472931,    
        'lon': 2.7406938863278953,
        'icon': 'camera',
        'color': 'beige',
        'imagen': '/proyectos/mallorca/recursos/fornalutx.webp',
        'web': 'https://www.ajfornalutx.net/es'
    },

    {   
        'nombre': 'Sóller',
        'lat': 39.767143848482064,    
        'lon': 2.7161658625927068,
        'icon': 'camera',
        'color': 'beige',
        'imagen': '/proyectos/mallorca/recursos/soller.jpg',
        'web': 'https://soller.es/'
    },

    # PANADERÍAS

    {   
        'nombre': 'Bocagua',
        'lat': 39.55309881790235,     
        'lon': 2.694096910663844,
        'icon': 'bread-slice',
        'color': 'gray',
        'imagen': '/proyectos/mallorca/recursos/bocagua.jpg',
        'web': 'https://www.instagram.com/_bocagua/'
    },

    {   
        'nombre': 'La Petite Boulangerie',
        'lat': 39.57195363820514,      
        'lon': 2.654539835914916,
        'icon': 'bread-slice',
        'color': 'gray',
        'imagen': '/proyectos/mallorca/recursos/boulangerie.jpeg',
        'web': 'https://www.instagram.com/lapetiteboulangerie_palma/p/C8uCXnjNsCc/?img_index=1'
    },

    # OCIO

    {   
        'nombre': 'Palma Aquarium',
        'lat': 39.53153966930979,       
        'lon': 2.7295828413515437,
        'icon': 'face-smile',
        'color': 'green',
        'imagen': '/proyectos/mallorca/recursos/aquarium.jpeg',
        'web': 'https://tickets.palmaaquarium.com/es/?utm_source=gmybusiness&utm_medium=boton_site&utm_campaign=enlace_web'
    },

    {   
        'nombre': 'Aqualand',
        'lat': 39.49630129995113,     
        'lon': 2.7603832597812303,
        'icon': 'face-smile',
        'color': 'green',
        'imagen': '/proyectos/mallorca/recursos/aqualand.jpeg',
        'web': 'https://www.aqualand.es/elarenal'
    },

    # HELADERÍAS

    {   
        'nombre': 'Giovanni L.',
        'lat': 39.57006922592635,      
        'lon': 2.6495872683365467,
        'icon': 'ice-cream',
        'color': 'orange',
        'imagen': '/proyectos/mallorca/recursos/giovanni.jpg',
        'web': 'http://giovannil.com/'
    },

]

# Añadir los marcadores al mapa
for lugar in lugares:
    popup_html = f"""
    <div>
        <h4>{lugar['nombre']}</h4>
        <img src="{lugar['imagen']}" width="150" height="100"><br>
        <a href="{lugar['web']}" target="_blank">Más información</a>
    </div>
    """
    popup = folium.Popup(popup_html, max_width=200)
    tooltip = folium.Tooltip(lugar['nombre'])

    folium.Marker(
        [lugar['lat'], lugar['lon']],
        popup=popup,
        tooltip=tooltip,
        icon=folium.Icon(icon=lugar['icon'], prefix='fa', color=lugar['color'])
    ).add_to(m)

m.save('/var/www/html/mallorcamap.html')

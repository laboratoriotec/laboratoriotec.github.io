import folium

m = folium.Map(location = [40.41349, -3.69609], zoom_start = 4)

# Palma
folium.Marker(location = [39.569283750654236, 2.6486536835203465], popup="Palma").add_to(m)
# Berlín
folium.Marker(location = [52.52135508877237, 13.400689724446355],  popup="Berlín").add_to(m)
# París
folium.Marker(location = [48.85611488957895, 2.3535555721242223], popup="París").add_to(m)
# Florencia
folium.Marker(location = [43.76854719147439, 11.25332681972439], popup="Florencia").add_to(m)
# Nueva York
folium.Marker(location = [40.71350727623307, -74.01402487994099], popup="Nueva York").add_to(m)
# Madrid
folium.Marker(location = [40.41588398203904, -3.7083874086127957], popup="Madrid").add_to(m)
# Barcelona
folium.Marker(location = [41.38774475071274, 2.1638754853653475], popup="Barcelona").add_to(m)
# Granada
folium.Marker(location = [37.17705826839299, -3.5986148032038185], popup="Granada").add_to(m)
# Bilbao
folium.Marker(location = [43.262858589246896, -2.9390930335241876], popup="Bilbao").add_to(m)
# Roma
folium.Marker(location = [41.89462149733724, 12.494101121457069], popup="Roma").add_to(m)
# Neunkirchen
folium.Marker(location = [49.348869409262164, 7.179675889853852], popup="Neunkirchen").add_to(m)
# Atenas
folium.Marker(location = [37.985959488651574, 23.728210574059318], popup="Atenas").add_to(m)
# Nueva Delhi
folium.Marker(location = [28.610848413704517, 77.20657851843589], popup="Nueva Delhi").add_to(m)
# Kuramathi (Islas Maldivas)
folium.Marker(location = [4.259260506664182, 72.98206776410422], popup="Kuramathi").add_to(m)


# Gran Bretaña
folium.Marker(location = [54.95157918649025, -2.6775658422600577],
              icon = folium.Icon(icon= "flag", color = "red")).add_to(m)

m.save('/ruta/directorio/deseado/map.html')

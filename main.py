import eel
from middle.mid_convert import *

if __name__ == '__main__':
    eel.init('front')

    eel.browsers.set_path("chrome", "C:/Users/admin/Documents/chrome-win/chrome.exe")

    eel.start('index.html', mode="chrome", size=(760, 760))


def PrintText():
 print("The date is")
PrintText() 
from datetime import datetime
now = datetime.now()
now.strftime("%m/%d/%Y, %H:%M:%S")

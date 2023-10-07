from flask import Flask, request
from dotenv import dotenv_values

app = Flask(__name__)

@app.route('/test', methods=['POST'])
def help():
  user_input = request.json
  
  to_storage(str(user_input))
  return "Help?"

def to_storage(user_input: str):
  with open('../db/storage.txt', 'a') as file:
    file.write(user_input + '\n')

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=5000)
body { margin: 0; overflow: hidden; background: #000; font-family: 'Courier New', monospace; }
#ui { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }

#speedo {
    position: absolute; bottom: 30px; right: 30px;
    color: #00ffcc; font-size: 50px; text-shadow: 0 0 10px #00ffcc;
}
#speedo span { font-size: 20px; margin-left: 5px; }

#chat-area {
    position: absolute; bottom: 80px; left: 20px;
    width: 300px; height: 150px; overflow: hidden;
    color: white; display: flex; flex-direction: column-reverse;
}
#chat-input {
    position: absolute; bottom: 40px; left: 20px;
    background: rgba(255,255,255,0.1); border: 1px solid #00ffcc;
    color: white; pointer-events: auto; padding: 5px; width: 250px;
}
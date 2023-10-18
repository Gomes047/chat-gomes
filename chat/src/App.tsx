import "./App.css"

export default () => {
  return <>
    <main>
      <div className="message">
        <div className="user">
          Dunha, aquele!
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla molestias quos suscipit sed sint quasi fuga ratione, eveniet mollitia ut sit perferendis pariatur necessitatibus officiis impedit facilis fugiat ad!
        </div>
      </div>

      <div className="message self">
        <div className="user">
          Dunha, aquele!
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla molestias quos suscipit sed sint quasi fuga ratione, eveniet mollitia ut sit perferendis pariatur necessitatibus officiis impedit facilis fugiat ad!
        </div>
      </div>
    </main>
    <div className="input-area">
      <input type="text" placeholder="Digite sua mensagem" />
      <button type="submit">enviar</button>
    </div>
  </>
}
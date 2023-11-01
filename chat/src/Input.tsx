interface Props {
   setMensagem: any
   mensagens: any
}

export default (props: Props) => {
   const { setMensagem, mensagens } = props;

   function onClick() {
      const novaListaDeMensagem = [
         ...mensagens,
         { self: true, date: "04:23 2020/12/12", user: "Dirce", text: "lorem ipsumc 22"},
      ]
      setMensagem(novaListaDeMensagem)
}

 return <>
   <div className="input-area">
      <textarea placeholder="Digite sua"></textarea>
      <button onClick={onClick} type="submit"></button>
   </div>
</>
}

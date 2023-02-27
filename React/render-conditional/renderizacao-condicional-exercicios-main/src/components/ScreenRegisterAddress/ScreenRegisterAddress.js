
function ScreenRegisterAddress(){

// Á página vai precisar ter:
// Um input para endereço
// Um input para número da residência
// um input para telefone
// um input para complemento
// um botão para ser usado para passar a próxima página

    return (
        <>
            <form>
                <label>
                    Endereço:
                    <input type="text"  />
                </label>
                <label>
                    Número:
                    <input type="text"  />
                </label>
                <label>
                    Telefone:
                    <input type="text"  />
                </label>
                <label>
                    Complemento:
                    <input type="text"  />
                </label>

                <button>Confirmar</button>
                <button>voltar</button>

            </form>
            
        </>
    )
}

export default ScreenRegisterAddress;
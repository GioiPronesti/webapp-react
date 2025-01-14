import axios from "axios";

const initialFormData = {
    vote:1,
    name: "",
    text: ""
}

function FormReview(){


    return (
        <section>
        <div className="container" >
            <div className="form-section">

              <strong className="title-form">Aggiungi una recensione</strong>
              <form action="" className="form-rating">
                  <div className="form-box">  
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="nome" name="name" id="name"/>
                  </div>
                  <div className="form-box">
                    <label htmlFor="text">Descrizione</label>
                    <textarea name="text" id="text" rows="4" placeholder="Scrivi la tua recensione"></textarea>
                  </div>
                  <div className="form-box">
                    <label htmlFor="vote">Voto</label>
                      <select name="vote" id="vote">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                  </div>

                  <button className="submit-btn">Invia</button>
              </form>
            </div>
          
        </div>
        
      </section>
    )
}

export default FormReview
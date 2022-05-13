import Menu from '../components/Menu';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import React from 'react';

const options = ['24h', '12h'];

class Asetukset extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            inputValue: '24h'
        };

        this.updateState_InputValue = this.updateState_InputValue.bind(this)
        this.updateState_Value = this.updateState_Value.bind(this)
    }

    updateState_InputValue(newInputValue){  
        this.setState({
          inputValue: newInputValue
        }) 
      }

    updateState_Value(newValue){
        this.setState({
            value: newValue
        })
    }


    //aikaformaatti olisi pitänyt käyttää radiobuttoneita mutta huomasin liian myöhään
    //kuitenkin esimerkiksi windows asetuksissa aikaformaatin vaihto sama GUI ratkaisu
    //lisätietoa alta:
    //https://websetnet.net/fi/how-to-switch-between-am-pm-24-hour-time-format-in-windows-10/ 
    render() {
        return (  
            <div className="asetukset_sivu">
                <Menu />
                <h1>Asetukset osio!</h1>
                    <div className="email_form">
                    <form>
                        <label>Email Address:</label>
                        <div class="t">
                            <input type="text" 
                                required 
                                placeholder="Laita sähköpostiosoitteesi ja paina Enter"
                            />
                            <Button variant="contained" class="btn">Enter</Button>
                        </div>
                    </form>
                </div>
                <div className="time_format_form">
                    <Autocomplete
                        onChange={(event, newValue) => {
                            this.updateState_Value(newValue);
                        }}
                        inputValue={this.inputValue}
                        onInputChange={(event, newInputValue) => {
                            this.updateState_InputValue(newInputValue);
                        }}
                        id="time_format_section"
                        options={options}
                        sx={{ width: 300, marginLeft: 120, marginTop: 3 }}
                        renderInput={(params) => <TextField {...params} label="Aikaformaatti" />}
                    />
                </div>
            </div>
        );
    }
}

export default Asetukset;



import { Component } from 'react';

export class ContactTransfer extends Component {
    state = {
        amount: 0,
    };

    onTransfer = (ev) => {
        ev.preventDefault();
        this.props.onTransfer(this.state.amount);
    };

    handleChange = (ev) => {
        ev.preventDefault();
        const { value } = ev.target;
        this.setState({ amount: +value });
    };

    render() {
        const { contact } = this.props;
        const { amount } = this.state;
        return (
            <div className="contact-transfer">
                <form onSubmit={this.onTransfer}>
                    <h1>Transfer coins to {contact.name}</h1>
                    <input
                        onChange={this.handleChange}
                        type="number"
                        placeholder="amount"
                        value={amount}
                        name="amount"
                    />
                    <button>Transfer</button>
                </form>
            </div>
        );
    }
}

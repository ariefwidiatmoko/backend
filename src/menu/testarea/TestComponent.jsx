import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from './testActions'
import {Button} from 'semantic-ui-react'
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class TestComponent extends Component {
    state = {
        center: {
            lat: 59.95,
            lng: 30.33
          }
    }

    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            console.log('Success', latLng);
            this.setState({center: latLng});
          })
        .catch(error => console.error('Error', error));
    };

    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Area</h1>
                <h3>The Save Data is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
                <br/>
                <br/>
                <TestPlaceInput selectAddress={this.handleSelect} />
                <SimpleMap key={this.state.center.lng + this.state.center.lat } latlng={this.state.center} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.test.data
})

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)

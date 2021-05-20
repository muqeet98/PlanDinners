import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import RnVerticalSlider from 'rn-vertical-slider';
import StepIndicator from 'react-native-step-indicator';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];
const customStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fff',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#fff',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fff',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'white',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: 'white',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: 'black',
  stepIndicatorLabelFinishedColor: 'black',
  stepIndicatorLabelUnFinishedColor: 'black',
  labelColor: '#999999',
  labelSize: 0,
  currentStepLabelColor: 'black',
};

import styles from './styles';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: this.props.route.params.nextPosition,
      nextPosition: this.props.route.params.nextPosition,
      age: '',
      value: '',
      age1: '0',
      soccer: false,
      music: false,
      rugby: false,
      singing: false,
      movies: false,
      boxing: false,
      reading: false,
      traveling: false,
      games: false,
      bowling: false,
      trekking: false,
      yoga: false,
      fitness: false,
      gardening: false,
      socialnetwork: false,
      gardening: false,
      wine: false,
    };
  }

  toggle() {
    this.setState({soccer: !this.state.soccer});
  }

  onPageChange(position) {
    this.setState({currentPosition: position});
  }
  incrementCount() {
    this.setState({nextPosition: this.state.currentPosition + 1});
    console.log('Next Gender Hai', this.state.nextPosition);
  }

  NextScreen = async () => {
    await this.incrementCount();
    console.log('Next Next Hai ', this.state.nextPosition);

    this.props.navigation.navigate('Location', {
      nextPosition: this.state.nextPosition,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../Assets/bgimages/backgroundHobbies.png')}
          style={styles.image}>
          <View style={styles.headercontainer}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Diet')}>
                <Image
                  style={styles.imagestyle}
                  source={require('../../../Assets/bgimages/backicon.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{paddingLeft: 30}}>
              <Text style={styles.text}>What are your interests??</Text>
            </View>
          </View>
          <View>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.colmn1}></View>

            <ScrollView style={styles.colmn2} showsVerticalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({soccer: !this.state.soccer})}>
                    {this.state.soccer ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Soccer.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Soccer</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Soccer.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Soccer</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({music: !this.state.music})}>
                    {this.state.music ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Music.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Music</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Music.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Music</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row  2        +++++++++++++++++++++++++ */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({rugby: !this.state.rugby})}>
                    {this.state.rugby ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Rugby.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Rugby</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Rugby.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Rugby</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({singing: !this.state.singing})
                    }>
                    {this.state.singing ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Singing.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Singing</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Singing.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Singing</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row 3++++++++++++++ */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({movies: !this.state.movies})}>
                    {this.state.movies ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Movies.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Movies</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Movies.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Movies</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({boxing: !this.state.boxing})}>
                    {this.state.boxing ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Boxing.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Boxing</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Boxing.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Boxing</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* 4th Row +++++++++++++++++ */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({reading: !this.state.reading})
                    }>
                    {this.state.reading ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Reading.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Reading</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/Reading.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Reading</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({traveling: !this.state.traveling})
                    }>
                    {this.state.traveling ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/traveling.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Traveling</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/traveling.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Traveling</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row  5 +++++++++++++++++= */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({games: !this.state.games})}>
                    {this.state.games ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/games.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Games</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/games.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Games</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({bowling: !this.state.bowling})
                    }>
                    {this.state.bowling ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/bowling.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>bowling</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/bowling.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>bowling</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row   6  +++++++++++= */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({trekking: !this.state.trekking})
                    }>
                    {this.state.trekking ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/trekking.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Trekking</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/trekking.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Trekking</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({yoga: !this.state.yoga})}>
                    {this.state.yoga ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/yoga.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Yoga</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/yoga.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Yoga</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* row  7    +++++++++++ */}
              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({fitness: !this.state.fitness})
                    }>
                    {this.state.fitness ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/fitness.png')}
                          />
                        </View>

                        <View>
                          <Text style={styles.activetext}>Fitness</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/fitness.png')}
                          />
                        </View>
                        <View>
                          <Text style={styles.inactivetext}>Fitness</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({wine: !this.state.wine})}>
                    {this.state.wine ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/wine.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Wine tasting</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/wine.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Wine Testing</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* row   8        ++++++++++++++++= */}

              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({gardening: !this.state.gardening})
                    }>
                    {this.state.gardening ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/gardening.png')}
                          />
                        </View>

                        <View>
                          <Text style={styles.activetext}>Gardening</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/gardening.png')}
                          />
                        </View>
                        <View>
                          <Text style={styles.inactivetext}>Gardening</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() =>
                      this.setState({socialnetwork: !this.state.socialnetwork})
                    }>
                    {this.state.socialnetwork ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/socialnetwork.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>socialnetwork</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/IntrestIcons/socialnetwork.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>socialnetwork</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            <View style={styles.colmn3}>
             
                  <TouchableOpacity onPress={this.NextScreen}>
                    <Image
                      style={styles.imagestyle}
                      source={require('../../../Assets/bgimages/arrowforward.png')}
                    />
                  </TouchableOpacity>
          
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default index;

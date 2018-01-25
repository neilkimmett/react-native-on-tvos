/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TouchableHighlight,
  requireNativeComponent
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}

var Search = requireNativeComponent('NKSearchComponent', null)

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      searchText: ''
    }
  }

  onPress (tab) {
    return () => {
      this.setState({selectedTab: tab})
    }
  }
  render () {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Home'
          selected={this.state.selectedTab == 'home'}
          onPress={this.onPress('home')}
        >
          <VideoGrid style={styles.container} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title='Search'
          selected={this.state.selectedTab == 'search'}
          onPress={this.onPress('search')}
        >
          <Search style={styles.search} onChangeText={this.onChangeText}>
            <VideoGrid searchText={this.state.searchText}/>
              </Search>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }

  onChangeText = (event) => {
    this.setState({searchText: event.nativeEvent.text})
   }
}


class VideoGrid extends Component {

  render () {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={this.videos(this.props.searchText)}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={4}
        horizontal={false}
      />
    )
  }

  videos = (text) => {
    var allVideos = require('./videos.json').filter((item) => item.youtube != null);
    if (text) {
      return allVideos.filter((item) => item.title.toLowerCase().includes(text))
    }
    else {
      return allVideos
    }
  }

  keyExtractor = (item, _) => item.youtube

  renderItem({ item, index }) {
    return (
      <Card item={item} />
    )
  }
}

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focused: false,
    }
  }

  onPressIn = () => this.setState({ focused: true })
  onPressOut = () => this.setState({ focused: false })

  render () {
    const {focused} = this.state
    const {item} = this.props
    return (
      <TouchableHighlight
        style={[styles.card,
          {
            opacity: focused ? 1 : 0.5,
            transform: [
              {scale: focused ? 1 : 0.85},
            ],
          }
        ]}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}

      >
          <YouTubeImage id={item.youtube}>
            <View style={styles.textBg}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>

              <Text style={styles.speaker}>
                {item.speakers.join(", ")}
              </Text>
            </View>
          </YouTubeImage>
      </TouchableHighlight>
    )
  }
}

class YouTubeImage extends Component {
  render () {
    return (
      <ImageBackground
        style={styles.image}
        source={{uri: "https://img.youtube.com/vi/" + this.props.id + "/0.jpg"}}
      >
        {this.props.children}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  card: {
    backgroundColor: '#000000',
    marginRight: 10,
    marginTop: 10,
  },
  textBg: {
    backgroundColor: '#000000',
    opacity: 0.7,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    margin: 10,
  },
  speaker: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  image: {
    width: 460,
    height: 258,
  },
  search: {
    flex: 1
  }
});

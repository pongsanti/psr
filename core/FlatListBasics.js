import React, {Component} from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Alert} from 'react-native'

const url = 'https://jsonplaceholder.typicode.com/posts'

class FlatListBasics extends Component {
  static navigationOptions = {
    title: 'Posts'
  };

  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      fetch_success: false
    }
  }
  componentWillMount () {
    fetch(url)
    .then((res) => res.json())
    .then(this.fetchSuccess.bind(this))
    .catch((err) => Alert.alert(String(err)));
  }

  fetchSuccess (data) {
    this.setState({
      fetch_success: true,
      posts: data})
  }

  render() {
    const data = this.state.posts.map((x) => {
      x.key = x.id;
      return x;
    });
    return (
      <View style={styles.container}>
        { !this.state.fetch_success && <ActivityIndicator size='large' color='tomato' />}
        <FlatList
          data={data}
          renderItem={({item}) =>
            <View style={styles.itemContainer}>
              <View style={styles.itemHeadContainer}>
                <View style={styles.postIdContainer}>
                  <Text style={styles.item}>{item.id}</Text>
                </View>
                <View style={styles.postTitleContainer}>
                  <Text style={styles.item}>{item.title}</Text>
                </View>
              </View>
              <View style={styles.postBodyContainer}>
                <Text>{item.body}</Text>
              </View>
            </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10
  },
  postIdContainer: {
    flex: 1,
    backgroundColor: 'azure'
  },
  postTitleContainer: {
    flex: 7,
    backgroundColor: 'gold'
  },
  postBodyContainer: {
    flex: 1,
    marginBottom: 5
  }, 
  itemHeadContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  itemContainer: {
    flexDirection: 'column'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default FlatListBasics

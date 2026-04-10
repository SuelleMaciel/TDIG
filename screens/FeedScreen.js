// telas/FeedScreen.js
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { EstilosGlobais, Cores } from './estilos';

const data = {
  woofs: [
    { id: '1', name: 'REX', avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a' },
    { id: '2', name: 'BALL-R', avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e' },
    { id: '3', name: 'HAPPY', avatar: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8' },
  ],
  posts: [
    { id: 'a', title: 'HAPPY WOOFS', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b', description: "Como manter seu pet feliz e saudável no dia a dia." },
    { id: 'b', title: 'WOOFS & FRIENDS', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d', description: "Melhores amigos são importantes para humanos e cães." },
  ]
};

const WoofCard = ({ name, avatar }) => (
  <View style={EstilosGlobais.woofCard}>
    <Image source={{ uri: avatar }} style={EstilosGlobais.avatar} />
    <Text style={stylesLocal.woofCardTitle}>{name}</Text>
  </View>
);

const WoofPostItem = ({ image, title, description }) => (
  <View style={EstilosGlobais.woofPost}>
    <Image source={{ uri: image }} style={EstilosGlobais.postImage} />
    <View style={EstilosGlobais.postContent}>
      <Text style={stylesLocal.postTitle}>{title}</Text>
      <Text numberOfLines={2} style={EstilosGlobais.postDescription}>{description}</Text>
    </View>
  </View>
);

export default function FeedScreen() {
  return (
    <ScrollView style={EstilosGlobais.appContainer}>
      <View style={EstilosGlobais.feedWrapper}>
        <Text style={stylesLocal.heading}>Trending Woofs</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={EstilosGlobais.horizontalScroll}>
          {data.woofs.map(woof => <WoofCard key={woof.id} {...woof} />)}
        </ScrollView>

        <Text style={[stylesLocal.heading, { marginTop: 10 }]}>New Woof Posts</Text>
        {data.posts.map(post => <WoofPostItem key={post.id} {...post} />)}
      </View>
    </ScrollView>
  );
}

const stylesLocal = StyleSheet.create({
  heading: { fontSize: 20, fontWeight: 'bold', marginVertical: 15, color: Cores.textMain },
  woofCardTitle: { fontWeight: 'bold', marginTop: 10, color: Cores.textMain, fontSize: 14 },
  postTitle: { fontWeight: 'bold', fontSize: 16, color: Cores.textMain },
});
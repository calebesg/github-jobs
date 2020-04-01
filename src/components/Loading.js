import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

// import { Container } from './styles';

export default function Loading({ loading }) {
  return (
    <>
      <ShimmerPlaceHolder visible={true} autoRun={true}>
        <ShimmerPlaceHolder visible={loading} style={{
          height: 20,
          width: '100%',
          borderRadius: 4,
          marginVertical: 10
        }} autoRun={true} /> 
        <ShimmerPlaceHolder visible={loading} style={{
          height: 60,
          width: '80%',
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
        <ShimmerPlaceHolder visible={loading} style={{
          height: 60,
          width: 100,
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
        <ShimmerPlaceHolder visible={loading} style={{
          height: 20,
          width: '100%',
          borderRadius: 4,
          marginBottom: 30
        }} autoRun={true} />
      </ShimmerPlaceHolder>

      <ShimmerPlaceHolder visible={true} autoRun={true}>
        <ShimmerPlaceHolder visible={loading} style={{
          height: 20,
          width: '100%',
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
       <ShimmerPlaceHolder visible={loading} style={{
          height: 60,
          width: '80%',
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
        <ShimmerPlaceHolder visible={loading} style={{
          height: 60,
          width: 100,
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
        <ShimmerPlaceHolder visible={loading} style={{
          height: 20,
          width: '100%',
          borderRadius: 4,
          marginBottom: 10
        }} autoRun={true} />
      </ShimmerPlaceHolder>
    </>
  );
}

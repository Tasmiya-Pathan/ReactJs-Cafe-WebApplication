import React from 'react'

function BackgroundComponent() {
  return (
    <div className="home-container" style={styles.backgroundImage}>
    <div className="container text-center text-white">
      <h1 className="display-4">Welcome to CafetTera</h1>
      <p className="lead">Experience the Best in Culinary Delights</p>
    </div>
  </div>
  )
}

const styles = {
  backgroundImage: {
    background: 'url("bg2.jpg") center/cover no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
};

export default BackgroundComponent
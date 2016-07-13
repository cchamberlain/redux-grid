export default name => {
  switch(name) {
    case 'server':
      return { __filename: true, __dirname: true, console: true, net: true }
    default:
      return { fs: 'empty', 'graceful-fs': 'empty', net: 'empty' }
  }
}

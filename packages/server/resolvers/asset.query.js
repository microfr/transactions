const fetch = require('node-fetch')

exports.getAsset = async(_, {namespace}) => {
    const data = await fetch(
        `https://rockhounds-images.s3-us-west-2.amazonaws.com/transactions-${process.env.APP_VERSION}/manifest.json`
      );
      const manifest = await data.json();

      return {
          src: `https://rockhounds-images.s3-us-west-2.amazonaws.com/transactions-${process.env.APP_VERSION}/${manifest["main.js"]}`
      }
}
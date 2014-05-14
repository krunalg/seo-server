module.exports.config = {
    host: '{TYPE_URL_HERE}',
    defaultPort: 3000,
    debugMode:true, //creates snapshot of each url visited by bots
    snapshotPath:'{PATH_TO_SAVE_SNAPSHOTS}',//eg./home/project/snapshots
    memcached: {
      enabled: true,
      defaultHost: '{MEMCACHE_HOST}',
      defaultPort: 11211,
      maxValue: 2097152,
      connectRetries: 5,
      key: '{KEY}'
    },
    logentries: {
      enabled: false,
      token: '{TOKEN}'
    },
    seoitems:{
        sitename:'{SITE_NAME}',
        default_title:'{DEFAULT_SITE_TITLE}',
        author:'{AUTHOR_NAME}',
        default_image_url:'http://{PATH_TO_YOUR_IMAGE}',
        og_locale:'en_US',
        og_type:'website',
        is_fragment_enaled:true
    }
};
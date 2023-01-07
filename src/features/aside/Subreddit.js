

export default function Subreddit({item}) {

  // console.log('subreddit is', item ) 
  let icon;
  let reddit;

    for ( let key in item ) {
      console.log('key is ', key)
      if (key === 'iconUrl') {
        console.log('key is iconUrl', key)
        if (item[key] === '') {
          icon = 'https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png'
        }else{
          icon = item[key]
        }
      }
      if(key === 'subreddit') {
        reddit = item[key]
      }
    }


console.log('icon is',  icon )
    
    
    return (
  
      <div className="flex">hi
        <img src={icon} alt='icon' />
        {reddit}
      </div>
  )
}

import {Link} from 'react-router-dom'

function Post(){
    return(
        <div className="post">
          <div className="image">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230817/pngtree-lotus-flower-jpg-pink-lotus-flower-image_13023952.jpg" alt="" />
          </div>
          <div className="texts">
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p className="info">
              <Link to="/author/Lavanya-AS" className="author">Lavanya AS</Link>
              <time datetime="2024-09-01T14:45">2024-09-01 14:45</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, modi exercitationem. Ea repellat incidunt quod!</p>
          </div>  
        </div>
    );
  }
  
  export default Post
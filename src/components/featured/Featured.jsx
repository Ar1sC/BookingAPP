import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/655334.jpg?k=476fb688776aa3bf56643b63f01ea0bf8f70e8db20d374b818fc1cd741b6b59d&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nafplio</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/977227.jpg?k=7cf547df1d40f65019ad3bb9cc72a9bfd9763dc86b933cd51b50dfcb41dac8f2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Instanbul</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Athens</h1>
          <h1>123 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;

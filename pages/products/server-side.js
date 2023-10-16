/**
 * @description getServerSideProps 和 getStaticProps区别是
 * getServerSideProps实际上是在服务端渲染， 而getStaticProps实在客户端渲染
 */

function ServerSidePage(props) {

  return (
    <div>
      <h2>{props.username}</h2>
    </div>
  )
}

export default ServerSidePage;

// getServerSide()

export async function getServerSideProps(context) {
  const {params, req, res} = context;
  console.log(req)

  return {
    props: {
      username: 'Max'
    }
  }
}
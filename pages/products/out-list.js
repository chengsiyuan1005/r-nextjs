import {getFeatureListData} from '../../helper/api-utils'
import { useState } from 'react';

function OutListPage(props) {
  const [dataList, setDataList] = useState(props.featureListData)
  
  return (
    <div>
      <h2>Out list page</h2>
      <div>
        {
          dataList.map(item => <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>)
        }
      </div>
    </div>
  )
}

export default OutListPage;

export async function getStaticProps() {
  const featureListData = await getFeatureListData();
  console.log(featureListData)

  return {
    props: {featureListData}
  }
}
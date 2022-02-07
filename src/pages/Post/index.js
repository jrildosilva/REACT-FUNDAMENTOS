import React,{useMemo} from "react";
import { useParams, useLocation } from 'react-router-dom';

// export default function Post() {
//     const params = useParams();
//     const {search} = useLocation();
//     const queryParams = useMemo(() => new URLSearchParams(search), [search]) ;
     
//     console.log(params);
//     console.log(queryParams.get('MeuqueryParams'));
  

//     return <h1>Post page</h1>;
// }

export default class Post extends React.Component{
    constructor(props) {
        super(props);

        const {search} = this.props.location;
        this.queryParams = new URLSearchParams(search);
    }
    handleNavigate = ()=> { 
        this.props.history.push('/posts');
    };

    render() {
        return(
            <>
               <button onClick={this.handleNavigate}>
                Voltar para minha lista de posts
                </button>
            
             <h1>Post page</h1>
            
            </>
    

        );
        
       
    }
}

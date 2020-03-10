import React , {Component} from 'react'
import SideNav from '../app-shared/sideNav';
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import TopNavbar from '../app-shared/navBar';
import { Search } from '../../helpers/svgicons';
import DatatablePage from '../datatable';
import data from '../../data/tableData';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData : {}
        };
    };

    componentDidMount() {
        this.setState({tableData: data});
    }

    render() {
        const { tableData } = this.state;
        return (
            <div className="dashboard">
                <TopNavbar />            
                <div className="main-content-wrapper">
                    <div className="sideNav-wrapper">
                        <SideNav></SideNav>                       
                    </div>
                    <div className="content-wrapper">
                        {
                            /**
                            <InputGroup className="mb-3 ml-auto searchbox">
                                <FormControl
                                    placeholder="Search assets"
                                    aria-label="Search assets"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text><Search /></InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                             */
                        }
                        <DatatablePage data={tableData} />
                    </div>
                </div>            
            </div>       
        );
    };
    
}

export default Home

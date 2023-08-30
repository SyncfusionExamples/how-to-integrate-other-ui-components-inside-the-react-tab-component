import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject,Category} from '@syncfusion/ej2-react-charts';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './App.css';

function App() {
  
  const htmlContent = () => {
    return <div>
      HyperText Markup Language is the standard markup language used to create web pages.
    </div>;
  }
  const javaContent = () => {
    return <div>
      Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers.
    </div>;
  }
  const javaScriptContent = () => {
    return <div>
      JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.
    </div>;
  }
  let chartData : any [] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }

  ];
  let sportsData : string [] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
  const chartTemplate = () : JSX.Element =>{
    return(
      <ChartComponent type='Line' primaryXAxis={{valueType:'Category'}}>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={chartData} xName='month' yName='sales'/>
        </SeriesCollectionDirective>
        <Inject services={[LineSeries,Category]}/>
      </ChartComponent>
    );
  }
  const calendarTemplate = () : JSX.Element =>{
    return(
      <CalendarComponent></CalendarComponent>
    );
  }
  const dropdownListTemplate = () : JSX.Element =>{
    return(
      <DropDownListComponent dataSource={sportsData} placeholder='Select a game' width='200px'></DropDownListComponent>
    );
  }
  return (
    <div className="App">
      <TabComponent cssClass='tab_content'>
        <TabItemsDirective>
          <TabItemDirective header={{ text:'Chart'}} content={chartTemplate} />
          <TabItemDirective header={{ text: 'Calendar' }}  content={calendarTemplate}/>
          <TabItemDirective header={{ text: 'Dropdown List' }} content={dropdownListTemplate}/>
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}

export default App;

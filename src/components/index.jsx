import Header from './header';
import Main from './main';
import TestInput from './testinput';

function Components() {

  return (
    <>   
        <div className='lk'>
          Новостной канал
           <div className='lk2'>
            о наших дебилах
           </div>

        </div>
        <Header/>
      
      <Main/>
      <TestInput />
    </>
  );
}

export default Components;

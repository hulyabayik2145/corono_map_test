import { render, screen } from "@testing-library/react";
import DetailPage from ".";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import { thunk } from "redux-thunk";

// test ortamındaki store'un kurlumunu yap thunk middleware'i kullandığımız söyle
const mockStore = configureStore([thunk]);

//test  yerine it de kullanılabiliyor
it("yüklenme durumunda doğru yüklenme bileşeni ekrana basılır ", () => {
  //STORE UN YÜKLENME DURUMUNDAKİ HALİNİ SİMULE ET
  const store = mockStore({
    isLoading: true,
    error: false,
    data: null,
  });
  //yukleme bileşeni ekrana basılır
  render(
    //BİLEŞENİ GEREKLİ KAPSAYICILARI TANIMLAYARAK RENDERLA
    <Provider store={store}>
      <BrowserRouter>
        <DetailPage />
      </BrowserRouter>
    </Provider>
  );

  //LOADER EKREANA GELİYORMU KONTROL ET
  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

it("hata durumunda doğru hata bileşeni ekrana basılır ", () => {});

it("veri gelme  durumunda doğru kartlar  ekrana basılır ", () => {});

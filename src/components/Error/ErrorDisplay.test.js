import { render, screen } from '@testing-library/react';
import ErrorDisplay from '.';
import userEvent from '@testing-library/user-event';

describe("error display bileşeni", () => {

    beforeEach(() => {
        console.log("Testin çalışmasından hemen önce");
    });
    beforeAll(() => {
        console.log("Testin çalışmasından hemen sonra ");
    });

    test("doğru mesajı gösterir", () => {
        const errorMessage = '404 content was not found';
        render(<ErrorDisplay message={errorMessage} retry={() => { }} />);

        //dogru hata mesajına sahip yazı var mı?
        screen.getByText(errorMessage);
        //gereksiz
        //expect(item).toBeInTheDocument();
    });
    test("tekrar dene butonuna tıklanınca fonksiyon çalışır", async () => {
        //userEvent kurulumu
        const user = userEvent.setup();
        //bir test /mock fonksiyonu oluştur
        const retryMock = jest.fn();

        //bileşeni renderla
        render(<ErrorDisplay message={'xx'} retry={retryMock} />)
        // butonu çağır
        const button = screen.getByRole('button')

        //butonu tıkla
        await user.click(button);

        //fonksiyon çağırıldımı kontrol et
        expect(retryMock).toHaveBeenCalled();
    });

})
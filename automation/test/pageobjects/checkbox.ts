import Page from "./Page";
class Checkbox extends Page{
    public open(){
        return super.open('/checkboxes');

    }
}
export default new Checkbox();
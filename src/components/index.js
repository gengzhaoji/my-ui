import MyButton from './my-button';
import MyButtonExport from './my-button-export';
import MyButtonText from './my-button-text';
import MyCapture from './my-capture';
import MyCascader from './my-cascader';
// import MyCodeEditor from './my-code-editor';
import MyCornerMark from './my-corner-mark';
import MyDatePicker from './my-date-picker';
import MyEcharts from './my-echarts';
import MyEditor from './my-editor';
import MyFileUpload from './my-file-upload';
import MyForm from './my-form';
import MyHeader from './my-header';
import MyImgUpload from './my-img-upload';
import MyInput from './my-input';
import MyInputNumber from './my-input-number';
import MyLazy from './my-lazy';
import MyListPanel from './my-list-panel';
import MyMarquee from './my-marquee';
import MyMenu from './my-menu';
import MyNumber from './my-number';
import MyPager from './my-pager';
import MyPanel from './my-panel';
import MyPeopleBank from './my-people-bank';
import MyPreview from './my-preview';
import MyPrint from './my-print';
// import MyProcess from './my-process';
import MySelect from './my-select';
import MySignature from './my-signature';
import MySortable from './my-sortable';
import MyTable from './my-table';
import MyTimer from './my-timer';
import MyTreeSelect from './my-tree-select';
import MyTreeTable from './my-tree-table';

export const components = [
    MyButton,
    MyButtonExport,
    MyButtonText,
    MyCapture,
    MyCascader,
    // MyCodeEditor,
    MyCornerMark,
    MyDatePicker,
    MyEcharts,
    MyEditor,
    MyFileUpload,
    MyForm,
    MyHeader,
    MyImgUpload,
    MyInput,
    MyInputNumber,
    MyLazy,
    MyListPanel,
    MyMarquee,
    MyMenu,
    MyNumber,
    MyPager,
    MyPanel,
    MyPeopleBank,
    MyPreview,
    MyPrint,
    // MyProcess,
    MySelect,
    MySignature,
    MySortable,
    MyTable,
    MyTimer,
    MyTreeSelect,
    MyTreeTable,
];

export default {
    install: function (app) {
        components.forEach((c) => {
            app.use(c);
        });
    },
};

import { Field, Form, Formik } from "formik";

import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  currentStock: Yup.number("Please enter valid stock ")
  .required("This field is required")
  .min(0.01,"Please enter valid stock"),

  currentStockLife: Yup.date()
    .required("This field is required")
    .min(new Date(),"Please enter valid data"),

    consumption: Yup.number()
    .required("This field is required")
    .min(0.01,"Please enter valid data"),

    orderedQty: Yup.number()
    .required("This field is required")
    .min(0.01,"Please enter valid Qty"),

    OrderedQtyLife: Yup.date()
    .required("This field is required")
    .min(new Date(),"Please enter valid data"),
});

const Shelflife = () => {
  const [initialFormValues] = useState({
    partNo: "",
    currentStock: "",
    currentStockLife: "",
    consumption: "",
    orderedQty: "",
    OrderedQtyLife: "",
  });

  const handleFormSubmit = async (values) => {
  
    // const date1 = new Date();
    // const date2 = new Date(values.OrderedQtyLife);
    // const diffTime = (date2 - date1);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffDays + " days");

      var curntStkSuffTill = new Date();
      curntStkSuffTill.setDate(curntStkSuffTill.getDate() + ((180 / values.consumption) * values.currentStock)) ;
      
      console.log ( curntStkSuffTill);
      let a = new Date(curntStkSuffTill) -  new Date()
      let b = new Date(values.currentStockLife) - new Date()
      var dateExpCon = new Date();
      if (a>b) {
        dateExpCon = (values.currentStockLife)
      } else {
        dateExpCon = (curntStkSuffTill)
      }
      let RemDays= Math.ceil((new Date(values.OrderedQtyLife) - new Date(dateExpCon)) / (1000 * 60 * 60 * 24));
      let QtyToCons= (values.consumption/180) * RemDays;

      if(QtyToCons >= values.orderedQty) {
      showMsg(`Acceptable, Max Qty: ${QtyToCons.toFixed()} can be purchased with offered shelf life`);
      } else {
       showMsg(`Not Acceptable, Max Qty: ${(values.orderedQty - (values.orderedQty - QtyToCons)).toFixed()} can be purchased with offered shelf life`) ;
      }
      
      function showMsg(msg) {
        let msgDiv = document.getElementById("msg")
        msgDiv.innerText = msg
    }
  };

  return (
    <>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Part Number:</label>
              <Field name="partNo"></Field>
            </div>

            <div>
              <label>Available Stock</label>
              <Field type="number" name="currentStock"></Field>
              {errors.currentStock && touched.currentStock ? (
                <div className="red"> {errors.currentStock}</div>
              ) : null}
            </div>

            <div>
              <label>Shelf life of available stock</label>
              <Field type="date" name="currentStockLife"></Field>
              {errors.currentStockLife && touched.currentStockLife ? (
                <div className="red"> {errors.currentStockLife}</div>
              ) : null}
            </div>
            <div>
              <label>Consumption in last 6 months</label>
              <Field type="number" name="consumption"></Field>
              {errors.consumption && touched.consumption ? (
                <div className="red"> {errors.consumption}</div>
              ) : null}
            </div>
            <div>
              <label>Ordered Qty</label>
              <Field type="number" name="orderedQty"></Field>
              {errors.orderedQty && touched.orderedQty ? (
                <div className="red"> {errors.orderedQty}</div>
              ) : null}
            </div>
            <div>
              <label>Offered Shelf life of Ordered Qty</label>
              <Field type="date" name="OrderedQtyLife"></Field>
              {errors.OrderedQtyLife && touched.OrderedQtyLife ? (
                <div className="red"> {errors.OrderedQtyLife}</div>
              ) : null}
            </div>
            <div>
              <button className="buttonStyleLogin" type="submit">
                Check Shelf Life
              </button>
            </div>
          </Form>
        )}
      </Formik>
      
      <div class="result" id="msg"></div>
    </>
  );
};

export default Shelflife;

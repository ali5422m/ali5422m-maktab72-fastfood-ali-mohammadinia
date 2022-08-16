import React from 'react'

function AdminPanel() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h4 className="fw-bold">داشبورد</h4>
            </div>

            <div id="chartdiv"></div>
    </>
     
  );
}

export default AdminPanel;

AdminPanel.getLayout = function PageLayout(page) {
  
  return (
    <>
      {page}
    </>
  )
}
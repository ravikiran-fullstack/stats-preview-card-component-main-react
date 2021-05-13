import React from "react";

const StatsPreviewCardBootstrap = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 order-sm-12">
          col-1
        </div>
        <div className="col-sm-6 order-sm-1">
          col-2
        </div>
      </div>

      <div class="row">
        <div className="col-sm-6 order-sm-12">
          <img src="https://dummyimage.com/400x400/000/fff&text=B" alt="" class="w-100"/>
        </div>
        <div className="col-sm-6 order-sm-1">
          <img src="https://dummyimage.com/400x400/000/fff&text=A" alt="" class="w-100"/>
        </div>
      </div>
    </>
  );
};

export default StatsPreviewCardBootstrap;

import React from 'react';

export default function About() {
  return (
  <div id="about">
      <h1>About Me</h1>
      <div className="row mt--30">
          <div>
              <div className="tabs-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="react-tabs" data-rttabs="true">
                                  <ul className="tab-style--1" role="tablist">
                                      <li className="react-tabs__tab" role="tab" id="react-tabs-0" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-1" data-rttab="true">Main skills</li>
                                      <li className="react-tabs__tab" role="tab" id="react-tabs-2" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-3" data-rttab="true">Awards</li>
                                      <li className="react-tabs__tab" role="tab" id="react-tabs-4" aria-selected="false" aria-disabled="false" aria-controls="react-tabs-5" data-rttab="true">Experience</li>
                                      <li className="react-tabs__tab react-tabs__tab--selected" role="tab" id="react-tabs-6" aria-selected="true" aria-disabled="false" aria-controls="react-tabs-7" data-rttab="true" tabindex="0">Education &amp; Certification</li>
                                      </ul>
                                      <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0"></div>
                                      <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"></div>
                                      <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4"></div>
                                      <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-7" aria-labelledby="react-tabs-6">
                                          <div className="single-tab-content">
                                              <ul>
                                                  <li><a href="/service">Champlain College SaintLambert - Social Sciences - Criminology</a> 2018</li>
                                                  <li><a href="/service">Champlain College SaintLambert - Computer Science Technology</a> 2022</li>
                                                  </ul>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </div>
  </div>
  );
}

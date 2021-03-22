import React from 'react';
import {Row , Col} from 'react-bootstrap';
import {Form , Button} from 'react-bootstrap' ;

function Blockcreate(){
    return (
        <div className="rightblock">
            <p className="Topname">Create Group</p>

            <div className="GroupName">
                Group Name
                <input class="form-control" type="text" placeholder="Group Name" aria-label="default input example"></input>
                
                
            </div>
            
            <div className="Member">
            
                <label for="exampleDataList" class="form-label">Group Member</label>
                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search Member"></input>
                <datalist id="datalistOptions">
                    <option value="6009650075 Supitcha"></option>
                    <option value="6009610426 Phurit"></option>
                    <option value="6009650125 Chotika"></option>
                    <option value="6109650231"></option>
                    <option value="6109650207"></option>
                </datalist>
            </div>
                
            <div className="Advistor">
            
                <label for="exampleDataList" class="form-label">Group Advisor</label>
                <input class="form-control" list="datalistOptions1" id="exampleDataList" placeholder="Search Advistor"></input>
                <datalist id="datalistOptions1">
                <option value="Nutchakorn Ngamsaowaros"></option>
                    <option value="Propaporn Ratanatamrong"></option>
                    <option value="Saowaluck Watanapa"></option>
                    <option value="Wanida Putthividhya"></option>
                </datalist>
            </div>

            <button type="button" class="btn btn-outline-danger">Cancel</button>
            
            <button type="button" class="btn btn-outline-secondary">Create</button>
            
            
        </div>
    )
}

export default Blockcreate;


//删除循环引用
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null)
        {
            if (seen.has(value)) 
            {
                return;
            }
            seen.add(value);
        }
        if (typeof value === "function")
        {
            return;
        }
        return value;
    };
};

function postData(obj,key,value)
{
    var obj_snapshot = JSON.parse(JSON.stringify(value,getCircularReplacer()));
    app.$set(obj,key,obj_snapshot);
}

function testFight()
{
    let cap = ranCaptain({side:999});
    createShipForCap(cap,2,[10001,10001],[]);
    let staff = Math.floor(Math.random()*3);
    if(staff>0)
    {
        for(let i=0;i<staff;i++)
        {
            let p = RanPerson();
            addStaff(cap,p);
        }
    }

    for(let i=0;i<cap.ship.wp.length;i++)
    {
        if(cap.ship.wp[i].open==true&&cap.ship.wp[i].staff==-1)
        {
            let staffIdx=findValidStaff(cap,cap.ship.wp[i].stfTp);
            if(staffIdx!=-1)
            {
                AssignJob(cap,'wp',cap.ship.wp[i].idx,staffIdx);
            }
        }
    }
    playerShipFightWith(cap.ship);
}

function createPlayer()
{
    playerData = createCap({
        type:1,
        name:ranFullName(),
        gold:100,
        side:0,
        maxStaff:MAX_STAFF,
    });

    createShipForCap(playerData,1,[10000,10000],[]);
    playerData.ship.addItem(1,100);
    playerData.ship.addItem(10000,1);
    playerData.ship.addItem(20000,1);
    playerData.ship.addItem(20001,1);
    playerData.ship.addItem(20002,1);
    playerData.ship.addItem(20003,1);
    playerData.ship.addItem(20004,1);
    playerData.ship.addItem(20005,1);
}

function gameInit()
{
    createPlayer();
    stageInit(0,1);
    timeInit();
    app.playerShip = playerData.ship;
    app.player = playerData;
    //console.log(app);
}


import { useState } from "react";

const SwitchedAnswers = () => {
    const [page, setPage] = useState(0);

    return (
        <div className="switched-answers lots-of-padding">
            <div className="card card-body">
                <h3>Bat Signal Installation</h3>
                {
                    page === 0 ?
                        <>
                            <p>This process will guide you through installing your new Bat Signal flying mammal communication app.</p>
                            <button className="btn btn-success" onClick={() => setPage(1)}>Yes</button>
                            <button className="btn btn-outline-danger">No</button>
                        </>
                        :
                        page === 1 ?
                            <>
                                <h4>End User License Agreement</h4>
                                <div className="eula">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus sapien et ultrices luctus. Donec venenatis tempor volutpat. Ut eget tempor massa. Vivamus quis eros ut risus efficitur pharetra id vitae lacus. Nunc rutrum eget dui eget condimentum. Pellentesque egestas leo nec dui tristique aliquam. Etiam a enim quis leo congue eleifend et ut neque. Donec id dignissim nibh. Cras vel consequat felis. Quisque posuere blandit nisi, quis fermentum elit semper nec. Suspendisse eu velit laoreet, finibus turpis id, suscipit elit. Mauris elementum pretium eros, quis varius nulla. Nam facilisis diam quis turpis consectetur, quis dignissim velit mollis. In sodales lectus in enim faucibus iaculis. Quisque condimentum blandit ex lacinia scelerisque. Aenean aliquam pellentesque elit semper sodales.</p>
                                    <p>Donec fringilla vehicula tincidunt. Nulla id egestas leo. Quisque luctus nulla non turpis sollicitudin auctor. Donec a risus quis enim semper rhoncus. Vestibulum a ante porttitor, fringilla nulla eleifend, cursus ante. Donec porta placerat enim vel vestibulum. Morbi id urna neque. Etiam accumsan lectus nec risus vulputate semper. Morbi a turpis sollicitudin, vulputate dolor sit amet, varius velit. Morbi vel mattis leo. Mauris ultrices, magna vitae dapibus tempus, eros nisl fringilla nulla, nec eleifend felis nibh vel mauris. Proin pellentesque ex urna, sed finibus mauris rutrum vel.</p>
                                    <p>Nullam pulvinar nisi id condimentum consequat. Quisque in venenatis dui, vel interdum tortor. Nunc iaculis ligula leo, non fringilla quam commodo lacinia. Donec varius lobortis vestibulum. Quisque mollis vitae ipsum at rutrum. Vivamus ipsum lectus, consequat vel nisi quis, consectetur ultrices mi. Fusce ac bibendum dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p>Phasellus consequat metus et lorem fermentum tincidunt. Vivamus sit amet viverra leo. Praesent maximus lorem congue erat feugiat venenatis. Suspendisse potenti. In sed arcu cursus, accumsan eros aliquam, condimentum dui. Donec sit amet est consectetur, scelerisque neque a, consectetur nulla. Duis rhoncus rutrum orci, eu dictum ligula suscipit vel. Curabitur ultrices ex ac finibus commodo. Pellentesque dictum volutpat lorem quis porta. Vestibulum in quam tempus, euismod augue ut, porttitor justo. Fusce lobortis ex nec justo elementum hendrerit. Morbi non vehicula nunc.</p>
                                    <p>Pellentesque euismod interdum lorem, pellentesque vulputate leo dignissim non. Ut mollis orci et porta malesuada. Mauris laoreet condimentum suscipit. Sed consequat scelerisque purus, sed iaculis odio vehicula a. Sed non enim et nisi posuere venenatis a ac velit. Mauris nec nulla mattis, interdum ligula sit amet, imperdiet nisi. Integer bibendum magna non lacus consequat ullamcorper. Maecenas nec lectus mollis, accumsan sem vel, malesuada dolor. Nunc ac cursus massa. Etiam vel velit ut tellus egestas tincidunt. Nunc ornare, dolor hendrerit aliquam maximus, neque risus luctus diam, id lacinia felis leo vel arcu. Cras id nibh sit amet tellus viverra rhoncus at vitae est. Curabitur at dolor ultrices, cursus nisi sit amet, ultrices sem. Quisque facilisis dui in velit vehicula dapibus.</p>
                                    <p>Phasellus a lorem ac nunc porta interdum at ac diam. Proin at massa orci. Aenean eleifend purus non dui cursus, vitae varius massa lobortis. Nunc rhoncus ullamcorper lobortis. Morbi at mi ut eros ultricies tincidunt. Maecenas dapibus iaculis sodales. Aliquam nec turpis sit amet mauris ullamcorper condimentum. Quisque molestie ipsum at tellus scelerisque, ac volutpat ex pellentesque. Quisque in orci ipsum. Morbi maximus ipsum velit. In ac tortor malesuada, mollis metus ac, aliquet risus.</p>
                                    <p>Ut volutpat elit id libero porttitor, bibendum consectetur nunc fringilla. Sed posuere faucibus dui, sed suscipit ipsum sodales a. Maecenas molestie elit ac purus tempus malesuada. Praesent augue mauris, pulvinar quis dapibus eu, lobortis vitae sem. Donec tortor magna, fringilla non ultrices quis, pretium posuere odio. Aenean ultricies et arcu eu maximus. Nulla vitae sem ut mauris facilisis efficitur. Quisque ultricies, arcu sit amet iaculis iaculis, justo ex ultricies turpis, non sollicitudin odio nulla at enim. Cras euismod venenatis nulla, id venenatis lectus sagittis id. Duis malesuada eget velit at egestas. Etiam pulvinar dictum enim, sed suscipit ipsum porta eget. Praesent dignissim malesuada tempor. Curabitur faucibus cursus dictum. Curabitur congue dictum mollis. Aliquam imperdiet convallis sem, ut tincidunt ex placerat vel. Nam luctus tellus quis urna egestas ultricies.</p>
                                    <p>Ut placerat hendrerit mi vel placerat. Donec consectetur vulputate magna ut lobortis. Cras at mauris ac erat tincidunt viverra. Cras vel tortor finibus, venenatis mauris sed, placerat sapien. Quisque pellentesque egestas nunc in tempus. In pulvinar pellentesque eros, at commodo massa malesuada sit amet. Integer viverra arcu id dictum venenatis. Maecenas tristique erat id dictum tempor. Etiam auctor vel nulla eget imperdiet. Nulla facilisi. Vestibulum sit amet nisi facilisis, fermentum lorem ut, pretium nibh. Curabitur consequat massa eu arcu sollicitudin lacinia. Nullam tempus metus non consectetur efficitur. In consectetur nisl id lorem dictum tempor.</p>
                                    <p>Curabitur sollicitudin varius fringilla. Nulla lacinia mollis velit sit amet consequat. Aliquam auctor, justo id luctus bibendum, leo lectus tristique ante, ut rutrum urna metus ac orci. Mauris at eros vitae lorem tincidunt sollicitudin. Phasellus dolor tortor, suscipit in justo et, molestie fringilla sapien. Donec vel mi consequat, convallis turpis eget, porttitor dolor. Praesent mollis ullamcorper urna.</p>
                                    <p>Vestibulum vitae quam sit amet dolor cursus hendrerit et id odio. Mauris tristique, eros a pellentesque ultricies, nulla quam rhoncus nunc, eu sagittis turpis neque nec nisi. Nullam magna diam, vestibulum sed quam eget, consequat laoreet libero. Vivamus nec tempus tellus. Nulla vitae enim non arcu fringilla ornare non porta felis. Vestibulum pellentesque est ut odio interdum dapibus. Pellentesque ultricies vestibulum dignissim. Nulla facilisi. Integer at tempus nulla. Phasellus auctor felis enim, sed sagittis lorem pharetra ut.</p>
                                </div>
                                <button className="btn btn-success" onClick={() => setPage(2)}>Yes</button>
                                <button className="btn btn-outline-danger" onClick={() => setPage(1)}>No</button>
                            </>
                            :
                            page === 2 ?
                                <>
                                    <h4>Share behavioral data</h4>
                                    <p>We can share your data with third-party partners to improve performance and provide an all-around better experience.</p>
                                    <div>
                                        <button className="btn btn-success" onClick={() => setPage(3)}>No</button>
                                        <button className="btn btn-outline-danger" onClick={() => setPage(3)}>Yes</button>
                                    </div>
                                </>
                                :
                                <>
                                    <h4>Thanks for installing Bat Signal!</h4>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bat-signal-progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </>
                }
            </div>
        </div>
    )
}

export default SwitchedAnswers;
angular.module('app')
    .run([
        '$httpBackend', function($httpBackend) {

            var dummyProducts = [
                {
                    name: 'Canon PowerShot SX510 HS Camera - Black (12.1MP, 30x Zoom) 3 inch LCD',
                    description: '30x optical zoom, 24mm wide lens in a mini body. 60x ZoomPlus \
                                HS System with 12.1 Megapixel CMOS, and DIGIC 4 for great results in low light\
                                Optical Image Stabiliser with Intelligent IS for sharp photos and steady movies\
                                Wi-Fi for easy sharing* and GPS tagging via mobile\
                                Full HD movies (1080p) with stereo sound, movie button, optical zoom and HDMI',
                    price: 139
                },
                {
                    name: 'Panasonic Lumix DMC-TZ60EB-K Compact Digital Camera - Black (18.1MP, 30x Optical Zoom, High Sensitivity MOS Sensor) 3 inch LCD (New for 2014)',
                    description: '30x Optical Zoom 24mm ultra wide angle Leica DC Lens and 18.1 MP High-sensitivity sensor\
                                0.2 inch 200K-dot equivalent Electronic Viewfinder with 100% field of view\
                                Enhanced Optical Image Stabilization with 5-axis correction and Level Shot function\
                                More creative control with Control Ring, Raw Shooting, Manual Focus and Focus Peaking\
                                Wi-Fi and NFC for on-the-spot sharing, storing and remote shooting using your tablet or smartphone',
                    price: 299
                },
                {
                    name: 'Canon IXUS 265 HSCompact Digital Camera - Black (16MP, 12x Optical Zoom, 24x ZoomPlus, Wifi, NFC) 3inch LCD',
                    description: 'Get the quality your memories deserve with 16 MP HS System\
                                Fit everyone in the frame with the ultra-wide angle or zoom in to distant subjects using the powerful optical zoom and ZoomPlus\
                                Wi-Fi and NFC for easy connection to your smartphone and for sharing on social networks\
                                No more blurred photos and movies thanks to Image Stabilizer and Intelligent IS\
                                Creative Shot effortlessly adds artistic twists to shots',
                    price: 108
                },
                {
                    name: 'Bundle: Fuji AX650 Digital Camera in Black + Sandisk SD 8GB + Kodak Neoprene Case (Fujifilm Finepix AX650 Black, 16MP, 5xOptical Zoom, 2.7" LCD, HD video)',
                    description: '16 megapixels, 5 x optical zoom 6.7 x digital zoom, 2.7-inch LCD screen\
                                Full HD still photos and 720p HD movie capture (30 fps)\
                                Digital Image Stabilisation and High ISO sensitivity to compensate for image blur caused by hand shake or subject movement\
                                Advanced features: Automatic Scene Recognition mode (SR Auto) , Face Detection, Panorama stich, easy Picture Search\
                                Bundle package includes Fuji AX650 Black Digital Camera, Sandisk 8GB SD Memory Card, Kodak Noprene Case. Everything you need to get started and take great pictures in any condition.',
                    price: 59
                }
            ];


            var dummyComments = [
                {
                    text: 'Good product to share with friends',
                    date: Date.now(),
                    id: 0
                },
                {
                    text: 'A little too expensive compared to other brands',
                    date: Date.now(),
                    id:0
                },
                {
                    text: 'Good product to share with friends',
                    date: Date.now(),
                    id: 1
                },
                {
                    text: 'A little too expensive compared to other brands',
                    date: Date.now(),
                    id: 1
                }
            ]
            //mock products get request
            $httpBackend.whenGET('/products').respond(dummyProducts);

            //mock products get request
            $httpBackend.whenGET(new RegExp('/comments/[0-9][0-9]*')).respond(function (method, url, data) {
                var productId = parseInt(url.replace("/comments/", ""));
                var comments = [];
                for (var index = 0; index < dummyComments.length; index++) {
                    if (productId == dummyComments[index].id) {
                        comments.push(dummyComments[index]);
                    }
                }
                return [200, comments, {}];;
            });


            //mock product add request
            $httpBackend.whenPOST('/products').respond(function (method, url, jsonProduct) {
                var product = JSON.parse(jsonProduct);
                dummyProducts.push(product);

                return [200, {}, {}];
            });

            //mock comments add request
            $httpBackend.whenPOST('/comments').respond(function (method, url, jsonComment) {
                var comment = JSON.parse(jsonComment);
                dummyComments.push(comment);

                return [200, {}, {}];
            });

            // allow html templates pass through
            $httpBackend.whenGET(/^\app\//).passThrough();
        }
    ]);
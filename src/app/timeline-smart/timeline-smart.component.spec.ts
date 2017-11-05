// import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
// import {
//   XHRBackend,
//   Response,
//   ResponseOptions, HttpModule
// } from '@angular/http';
// import { TimelineSmartComponent } from './timeline-smart.component';
// import {MockBackend} from "@angular/http/testing";
// import {TimelineEvent} from "../timeline/timeline-event";
// import {By} from "@angular/platform-browser";
//
// describe('TimelineSmartComponent', () => {
//   let component: TimelineSmartComponent;
//   let fixture: ComponentFixture<TimelineSmartComponent>;
//   let data: TimelineEvent[] = [
//     {
//       title: 'Test1',
//       date: new Date().toLocaleDateString().toString(),
//       beforeText: 'Text Before Text',
//       list: ['One', 'Two', 'Three'],
//       afterText: 'Test After Text'
//     },
//     {
//       title: 'Test2',
//       date: new Date().toLocaleDateString().toString(),
//       beforeText: 'Text Before Text',
//       list: ['One', 'Two', 'Three'],
//       afterText: 'Test After Text'
//     },
//     {
//       title: 'Test3',
//       date: new Date().toLocaleDateString().toString(),
//       beforeText: 'Text Before Text',
//       list: ['One', 'Two', 'Three'],
//       afterText: 'Test After Text'
//     }
//   ];
//
//   beforeEach(async(() => {
//
//     TestBed.configureTestingModule({
//       declarations: [ TimelineSmartComponent ],
//       imports: [HttpModule],
//       providers: [
//         { provide: XHRBackend, useClass: MockBackend }
//       ]
//     })
//
//     .compileComponents();
//
//     fixture = TestBed.createComponent(TimelineSmartComponent);
//     component = fixture.componentInstance;
//
//     fixture.detectChanges();
//   }));
//
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should create', inject([XHRBackend], (mockBackend) => {
//       mockBackend.connections.subscribe((connection) => {
//         connection.mockRespond(new Response(new ResponseOptions({
//           body: data
//         })));
//       });
//
//       component.ngOnInit();
//       let de = fixture.debugElement.query(By.css('h2:first-child'));
//       let el = de.nativeElement;
//       const content = el.textContent;
//       console.log(content);
//       expect(content).toContain('Test1');
//
//     }));
// });

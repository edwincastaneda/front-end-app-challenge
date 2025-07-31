import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluginStoreComponent } from '../app/pages/plugin-store/plugin-store.component';

describe('PluginStore', () => {
  let component: PluginStoreComponent;
  let fixture: ComponentFixture<PluginStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PluginStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

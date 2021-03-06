import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { select, Store, Action, ActionsSubject } from '@ngrx/store';

import { Currency } from '@thirty/api-interfaces';

import * as CurrencysActions from './currencys.actions';
import * as fromCurrencys from './currencys.reducer';
import * as CurrencysSelectors from './currencys.selectors';

@Injectable({
  providedIn: 'root'
})
export class CurrencysFacade {
  loaded$ = this.store.pipe(select(CurrencysSelectors.getCurrencysLoaded));
  allCurrencys$ = this.store.pipe(select(CurrencysSelectors.getAllCurrencys));
  selectedCurrency$ = this.store.pipe(select(CurrencysSelectors.getSelectedCurrency));

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectCurrency(selectedId: string) {
    this.dispatch(CurrencysActions.selectCurrency({ selectedId }));
  }

  resetSelectedCurrency(){
    this.dispatch(CurrencysActions.resetSelectedCurrency());
  }

  loadCurrencysSample() {
    this.dispatch(CurrencysActions.loadCurrencysSample());
  }

  loadCurrencys() {
    this.dispatch(CurrencysActions.loadCurrencys());
  }

  loadCurrency(currencyId: string) {
    this.dispatch(CurrencysActions.loadCurrency({ currencyId }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
